import React, { useState, useRef } from 'react'
import ReusableButton from '../../../../ReusableComponents/Button/button'
import { LinkContainer, OutputContainer, RowContainer } from './link-shortener-elements'
import { Input, Form } from 'antd';
import ReusableCopyButton from '../../../../ReusableComponents/CopyButton/CopyButton';

import { Oval } from 'react-loader-spinner'


const LinkShortener = () => {

  const [inputLink, setInputLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isURLValid, setURLValid] = useState(false);
  const [form] = Form.useForm();

  let urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator

  const shortenAPI = () => {
    setLoading(true);
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setURLValid(true);
          setShortLink(data.result.short_link);
          setLoading(false)
        }, 2000);

      });


  }

  const handleChange = (e) => {
    setInputLink(e.target.value);
    console.log(e.target.value);
  }

  return (
    <LinkContainer>
      <RowContainer>
        <Form form={form} onFinish={shortenAPI} className="formContainer">
          <div className='inputWrapper'>
            <Form.Item name='task'

              rules={[{ required: true, message: <p className='errorMessage'>Please add a link!</p> },
              { pattern: urlPattern, message: <p className='errorMessage'>Invalid URL</p> }
              ]}>
              <Input

                type="text"
                placeholder="Shorten a link here..."
                value={inputLink}
                onChange={handleChange}
              />
            </Form.Item>
            {/* 
            <p className='errorMessage'>{showInvalidURLError ? 'Please enter a valid URL' : ''} </p> */}
          </div>

          <ReusableButton name={ isLoading ? 
            <>
              <Oval
                height={16}
                width={20}
                color="#3B3054"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#3B3054"
                strokeWidth={5}
                strokeWidthSecondary={10}

              />&nbsp;<span>Loading</span>
            </>
            :
            'Shorten It!'
          } radius="10px" className="button" fullWidth="true" />

        </Form>
      </RowContainer>
      {isURLValid ?
        <OutputContainer>
          <div className="left-content">
            <p>{inputLink}</p>
          </div>
          <div className="right-content">
            <p>{shortLink}</p>
            <ReusableCopyButton />
          </div>
        </OutputContainer>
        :
        <></>
      }
    </LinkContainer>
  )
}

export default LinkShortener