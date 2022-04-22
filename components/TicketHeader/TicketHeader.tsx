import Image from 'next/image'
import React, { useRef, useState } from 'react'
import CheckBox from '../CheckBox/CheckBox'
import styles from './TicketHeader.module.scss'
import s_styles from './SetStatus.module.scss'
import { useClickOutside } from '../../utils/useClickOutside'
import {
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    MoreVertical,
    RotateCw,
} from 'react-feather'

interface Props {
    back: boolean
    reload: boolean
    status: boolean
    check: boolean
    threeDots: boolean
    assign: boolean
}

const TicketHeader = ({
    back,
    reload,
    status,
    threeDots,
    check,
    assign,
}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftHead}>
                {back && (
                    <div className={styles.btn} title="back">
                        <ArrowLeft color="#939ca8" size={20} />
                    </div>
                )}
                {check && <CheckBox />}

                {reload && (
                    <div className={styles.btn} title="reload">
                        <RotateCw color="#939ca8" size={20} />
                    </div>
                )}
                {status && <SetStatus />}
                {threeDots && (
                    <div className={styles.btn} title="options">
                        <MoreVertical color="#939ca8" size={20} />
                    </div>
                )}
            </div>
            <div className={styles.rightHead}>
                {assign && <Assign />}
                <div className={styles.pageNumber}>1-50 of 315</div>
                <div className={styles.btnSecondary} title="previous">
                    <ChevronLeft color="#939ca8" size={20} />
                </div>
                <div className={styles.btnSecondary} title="next">
                    <ChevronRight color="#939ca8" size={20} />
                </div>
            </div>
        </div>
    )
}

export const SetStatus = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('clear')

    const statuses = ['Pending', 'In Review', 'Solved']

    const ref = useRef(null)

    useClickOutside(ref, setIsOpen, isOpen)
    return (
        <div
            className={s_styles.container}
            onClick={() => {
                setIsOpen(!isOpen)
            }}
        >
            <div className={s_styles.value}>
                <div>{value === 'clear' ? 'Set Status' : value}</div>
                <Image src={'/svg/dropdown.svg'} height={5} width={8} />
            </div>
            <div
                ref={ref}
                className={s_styles.dropdown}
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                {statuses.map((status, index) => (
                    <div
                        key={index}
                        className={s_styles.dropdownItem}
                        onClick={() => {
                            setValue(status)
                            setIsOpen(!isOpen)
                        }}
                    >
                        {status}
                    </div>
                ))}

                <div
                    className={s_styles.dropdownItem}
                    onClick={() => {
                        setValue('clear')
                        setIsOpen(!isOpen)
                    }}
                    style={{ opacity: 0.5 }}
                >
                    Clear
                </div>
            </div>
        </div>
    )
}

export const Assign = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('clear')

    const assignees = ['John Doe', 'John Smith', 'Jane Doe']
    const ref = useRef(null)

    useClickOutside(ref, setIsOpen, isOpen)
    return (
        <div
            className={s_styles.container}
            onClick={() => {
                setIsOpen(!isOpen)
            }}
        >
            <div className={s_styles.value}>
                <div>{value === 'clear' ? 'Assign' : value}</div>
                <Image src={'/svg/dropdown.svg'} height={5} width={8} />
            </div>
            <div
                ref={ref}
                className={s_styles.dropdown}
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                {assignees.map((status, index) => (
                    <div
                        key={index}
                        className={s_styles.dropdownItem}
                        onClick={() => {
                            setValue(status)
                            setIsOpen(!isOpen)
                        }}
                    >
                        {status}
                    </div>
                ))}

                <div
                    className={s_styles.dropdownItem}
                    onClick={() => {
                        setValue('clear')
                        setIsOpen(!isOpen)
                    }}
                    style={{ opacity: 0.5 }}
                >
                    Clear
                </div>
            </div>
        </div>
    )
}

export default TicketHeader
