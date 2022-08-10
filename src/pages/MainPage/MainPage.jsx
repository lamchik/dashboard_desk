import {createSearchParams, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {DndContext, MouseSensor, useSensor, useSensors} from "@dnd-kit/core";

import {insertAtIndex, removeAtIndex} from "../../utils/array";
import {Column} from "../../components/Column/Column";
import {Checkbox} from "../../components/UI/Checkbox/Checkbox";
import {useEffect, useState} from "react";
import {Popup} from "../../components/Popup/Popup";
import {getAllTicketsSelector, getAllTicketsThunk, updateTicketThunk} from '../../store/tickets'

import styles from './styles.module.css'

const EDIT_MODE ='edit'
const CREATE_MODE ='create'
const ALLOWED_MODES = [CREATE_MODE, EDIT_MODE]

export const MainPage = () => {
  const [groups, setGroups] = useState({
    group1: [],
    group2: [],
    group3: [],
  });
  const navigate = useNavigate()
  const {mode, ticketId} = useParams()
  const dispatch = useDispatch()
  const tickets = useSelector(getAllTicketsSelector)
  const location = useLocation()
  const groupId = createSearchParams(location.search).get('group')
  const [filter, setFilter] = useState({tags: false, comments: false, description: false})
  const fields = ['tags', 'comments', 'description']

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 2,
      },
    }),
  );

  const onFilterChange = (field) => {
    let sp = new URLSearchParams({...filter, [field]: !filter[field]})
    navigate(`/?${sp.toString()}`)
  }

  useEffect(() => {
    if (mode && !ALLOWED_MODES.includes(mode)) {
      navigate('/', { replace: true })
    }

  }, [mode])


  useEffect(() => {
    const params = createSearchParams(location.search)
    const newFilters = {...filter}
    fields.forEach((item) => {
      newFilters[item] = params.get(item) === 'true'
    })

    setFilter(newFilters)
    dispatch(getAllTicketsThunk(newFilters))
  }, [location.search])

  useEffect(() => {
    setGroups({
      group1: tickets.filter(ticket => ticket.group === 'group1'),
      group2: tickets.filter(ticket => ticket.group === 'group2'),
      group3: tickets.filter(ticket => ticket.group === 'group3'),
    })
  },[tickets])

  const handleDragOver = ({ over, active }) => {
    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeContainer = active.data.current.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId;

    if (!overContainer) {
      return;
    }

    if (activeContainer !== overContainer) {
      setGroups((items) => {
        const activeIndex = active.data.current.sortable.index;
        const overIndex = over.data.current?.sortable.index || 0;

        return moveBetweenContainers(
          items,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
        );
      });
    }
  };

  const handleDragEnd = ({ over }) => {
    if (!over) {
      return;
    }

    const overContainer = over.data.current?.sortable.containerId;
    const ticket = tickets.find(ticket => ticket.id === over.id)

    if (overContainer && ticket && ticket.group !== overContainer) {
      const updatedTicket = {...ticket, group: overContainer}
      dispatch(updateTicketThunk({id: updatedTicket.id, ticket: updatedTicket}))
    }
  };

  const moveBetweenContainers = (
    items,
    activeContainer,
    activeIndex,
    overContainer,
    overIndex,
  ) => {
    const item = items[activeContainer][activeIndex]
    return {
      ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item)
    };
  };

  const onCreateTaskClick = (groupId) => {
    const params = createSearchParams(location.search)
    params.set('group', groupId)
    navigate(`/create/?${params.toString()}`)
  }

  const closePopup = () => {
    navigate(`/${location.search}`)
  }

  const onUpdateTaskClick = (id) => {
    navigate(`/edit/${id}/${location.search}`)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxWrapper}>
        <Checkbox
          value={filter.comments}
          onChange={() => onFilterChange('comments')}
          isWithText={true}
          text='Комментарий'
        />
        <Checkbox
          value={filter.description}
          onChange={() => onFilterChange('description')}
          isWithText={true}
          text='Описание'
        />
        <Checkbox
          value={filter.tags}
          onChange={() => onFilterChange('tags')}
          isWithText={true}
          text='Тег'
        />
      </div>
      <DndContext
        className={styles.columnWrapper}
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        <div className={styles.column} >
          <h1 className={styles.title}>Todo</h1>
          <h1 className={styles.title}>In progress</h1>
          <h1 className={styles.title}>Done</h1>

          {Object.keys(groups).map((group, index) => (
            <div className={styles.columnWrapper} key={group}>
              <Column
                id={group}
                tickets={groups[group]}
                onClick={onCreateTaskClick}
                onTaskClick={onUpdateTaskClick}
                index={index}
              />
            </div>
          ))}
        </div>
      </DndContext>

      {mode === CREATE_MODE && <Popup
        text='Создать тикет'
        titlePlaceholder='Название'
        descriptionPlaceholder='Описание'
        isVisible={mode === CREATE_MODE}
        setIsVisible={closePopup}
        groupId={groupId}
      />}
      {mode === EDIT_MODE && ticketId && <Popup
        text='Редактировать'
        titlePlaceholder='Нарисовать иллюстрацию'
        descriptionPlaceholder='Описание'
        isVisible={mode === EDIT_MODE && ticketId}
        setIsVisible={closePopup}
        ticket={tickets.find(ticket => ticket.id.toString() === ticketId)}
      />}
    </div>
  )
}
