import React, { useState } from "react"
import { styles } from "../styles"
import axios from 'axios'
import { AiOutlineLoading3QuartersMini } from '../../../lib/@reacticons'

import Avatar from '../Avatar'
const EmailForm = props => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    function getOrCreateUser(callback) {
        axios.put(
            'https://api.chatengine.io/users/',
            { username: email, email: email, secret: email },
            { headers: { "Private-Key": "90308fb4-ffae-4af7-b407-41b035e0c670" } }
        )
            .then(r => callback(r.data))
            .catch(e => console.log('Get or create user error', e))
    }

    function getOrCreateChat(callback) {
        axios.put(
            'https://api.chatengine.io/chats/',
            { usernames: [email, 'admain'], is_direct_chat: true },
            {
                headers: {
                    "Project-ID": "e234b8a9-6e10-470f-8d45-0e79376d50c6",
                    "User-Name": email,
                    "User-Secret": email,
                }
            }
        )
            .then(r => callback(r.data))
            .catch(e => console.log('Get or create chat error', e))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true)

        console.log('Sending Email', email)

        getOrCreateUser(
            user => {
                props.setUser && props.setUser(user)
                getOrCreateChat(chat => {
                    setLoading(false)
                    props.setChat && props.setChat(chat)
                })
            }
        )
    }

    return (
        <div
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: props.visible ? '100%' : '0px',
                    opacity: props.visible ? '1' : '0'
                }
            }}
        >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe} />
            </div>
            <div
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '0.33' : '0',
                    }
                }}
            />
            <AiOutlineLoading3QuartersMini
                className='transition-5'
                style={{
                    ...styles.loadingIcon,
                    ...{
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '1' : '0',
                        fontSize: '82px',
                        top: 'calc(50% - 41px)',
                        left: 'calc(50% - 41px)',
                    }
                }}
            />
            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                <Avatar
                    style={{
                        position: 'relative',
                        left: 'calc(50% - 44px)',
                        top: '10%',
                    }}
                />
                <div style={styles.topText}>
                    مرحبا بكم في<br /> الدعم الفني 👋
                </div>
                <form
                    onSubmit={e => handleSubmit(e)}
                    style={{ position: 'relative', width: '100%', top: '19.75%' }}
                >
                    <input
                        placeholder='أدخل بريدك الإلكتروني'
                        onChange={e => setEmail(e.target.value)}
                        style={styles.emailInput}
                    />
                </form>

                <div style={styles.bottomText}>
                    أدخل بريدك الإلكتروني<br /> للبدء بالتواصل .
                </div>
            </div>
        </div>
    )
}
export default EmailForm;