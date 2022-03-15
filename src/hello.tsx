import React from 'react'
import {FC} from 'react';
import {useState} from 'react';
import {DatePicker} from 'antd';
import {Form} from 'antd';
import moment from 'moment';

type FormData = {
  date: string
}

export const Hello: FC = () => {

  const [formData, setFormData] = useState({
    date: '2020-01-23'
  })

  return <>
    <Form<FormData> initialValues={formData} onValuesChange={(_, values) => {
      setFormData(values)
    }}>
      <Form.Item name={'date'}
        // convert value from formData to DatePicker
                 getValueProps={(e) => ({
                   value: e ? moment(e) : ''
                 })}
        // convert value from DatePicker to formData
                 getValueFromEvent={(e) => moment(e).format('YYYY-MM-DD')}
      >
        <DatePicker/>
      </Form.Item>
    </Form>
    <hr/>
    <pre>{JSON.stringify(formData, null, 4)}</pre>
  </>
};
