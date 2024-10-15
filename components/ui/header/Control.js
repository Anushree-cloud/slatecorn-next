'use client';
import { useDispatch } from 'react-redux'
import { addNote, deleteAll, rearrange } from '@/store/reducers/notes'
import { emptyNote } from '@/constants/notes'
import HeaderButton from '@/shared/buttons/HeaderButton'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation';

function Control() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { listing, isRearrange } = useSelector((state) => state.notes)
    
    const onAddClick = () => {
        dispatch(addNote(emptyNote))
    }

    const onDeleteAllClick = () => {
        dispatch(deleteAll())
    }
    
    const onRearrangeClick = () => {
        dispatch(rearrange())
    }

    const onViewAllClick = () => {
        router.push('/')
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <HeaderButton
                name="Add new slateboard"
                // onClick={onAddClick}
            />
            <HeaderButton
                name="View all slateboards"
                onClick={onViewAllClick}
            />
            {/* <HeaderButton
                name="Add a note"
                onClick={onAddClick}
            />
            <HeaderButton 
                name="Delete all notes"
                onClick={onDeleteAllClick}
                disabled={!listing.length}
            />
            <HeaderButton
                name="Re-arrange"
                onClick={onRearrangeClick}
                disabled={isRearrange || !listing.length}
            /> */}
        </div>
    )
}

export default Control
