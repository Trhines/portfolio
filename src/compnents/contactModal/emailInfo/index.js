import { Tooltip, OverlayTrigger, Nav } from 'react-bootstrap'
import { useState } from 'react'

import EmailIcon from '../../../images/emailsvg'

const EmailInfo = (props) => {

    const [tipText, setTipText] = useState("trhines94@gmail.com")
    const changeTipText = (text) => setTipText(text)
    const resetTipText = () => setTipText("trhines94@gmail.com")

    const [show, showState] = useState(false)
    const showTipHandler = () => showState(!show)
    const showTip = () => showState(true)
    const hideTip = () => showState(false)

    const tooltip = (props) => {
        return(
            <Tooltip id="resume-tooltip" show={show} {...props}>
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
        <div
            onMouseEnter={()=>{
                resetTipText()
                showTipHandler()}
            }
            onMouseLeave={()=>hideTip()} 
            onClick={copyEmail}>
                        <div className="flex-centered info-style">
                            <EmailIcon/>
                        </div>
                        <div className="flex-centered info-style">
                            <p>Gmail</p>
                        </div>
                    </div>
            
        
        </OverlayTrigger>
    )
}

export default EmailInfo