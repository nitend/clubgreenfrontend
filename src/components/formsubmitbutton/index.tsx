import React from 'react'
import { Button} from '@material-ui/core'
import styles from './SubmitButton.module.css'

interface Props {
    label: string
}

export const SubmitButton: React.FC<Props> = (props) => {
    return (
        <div className={styles.button_field}>
            <Button variant="outlined" type="submit">
                {props.label}
            </Button>
        </div>
    )
}
