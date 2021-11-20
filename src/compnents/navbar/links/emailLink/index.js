import { Tooltip, OverlayTrigger, Nav } from 'react-bootstrap'
import { useState } from 'react'

import EmailIcon from '../../../../images/emailsvg'

const EmailLink = (props) => {

    const [tipText, setTipText] = useState("Copy email to clipboard")
    const changeTipText = (text) => setTipText(text)
    const resetTipText = () => setTipText("Copy email to clipboard")

    const [show, showState] = useState(false)
    const showTipHandler = () => showState(!show)
    const showTip = () => showState(true)
    const hideTip = () => showState(false)

    const tooltip = (props) => {
        return(
            <Tooltip className="margin-left" id="resume-tooltip" show={show} {...props}>
               {tipText}
            </Tooltip>
        )
    }

    const copyEmail = async () => {
        navigator.clipboard.writeText('trhines94@gmail.com')
        await showTipHandler()
        changeTipText("Copied!")
        showTip()

        setTimeout(()=> {
            hideTip()
        },3000)
    }

    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 10, hide: 10 }}
            overlay={tooltip}
            show={show}
        >
        <Nav.Item
            onMouseEnter={()=>{
                resetTipText()
                showTipHandler()}
            }
            onMouseLeave={()=>hideTip()} 
            onClick={copyEmail}>
            <div className="nav-link">
                <EmailIcon/>
            </div>
        </Nav.Item>
        </OverlayTrigger>
    )
}

export default EmailLink




