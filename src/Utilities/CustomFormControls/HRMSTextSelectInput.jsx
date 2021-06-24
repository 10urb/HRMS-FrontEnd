import { useField } from 'formik'
import React from 'react'
import { FormSelect, Label } from 'semantic-ui-react'

export default function HRMSTextSelectInput({ ...props }) {
    const [field, meta] = useField(props)
    return (
        <div>
            <FormSelect  error={meta.touched && !!meta.error}>
                <input  {...field} {...props} />
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ) : null}
            </FormSelect>
        </div>
    )
}
