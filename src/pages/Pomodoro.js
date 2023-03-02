import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Pomodoro = () => {
    const navigate = useNavigate()
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [displayMessage, setDisplayMessage] = useState(false)

    const handleStop = () => {
        navigate('/')
        window.location.reload()
    }

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval)

            if(seconds === 0) {
                if(minutes !== 0) {
                    setSeconds(59)
                    setMinutes(minutes-1)
                } else {
                    let minutes = displayMessage ? 24 : 4
                    let seconds = 59

                    setMinutes(minutes)
                    setSeconds(seconds)
                    setDisplayMessage(!displayMessage)
                }
            } else {
                setSeconds(seconds - 1)
            }
        }, 1000)
    }, [seconds])

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

  return (
    <div className={`${displayMessage ? 'bg-white text-[#4b5320]' : 'bg-[#4b5320] text-white'}  min-h-screen flex flex-col justify-center items-center italic`}>
        {displayMessage && <div className='mx-4'>
            <p>Good job, Let's have a break or cup of coffee. Be back in:</p>
        </div> }
        <div>{timerMinutes}:{timerSeconds}</div>
        <div onClick={handleStop} className={`${displayMessage ? 'bg-[#4b5320] text-white border-[#4b5320]    hover:border hover:border-[#4b5320] hover:bg-white hover:text-[#4b5320]' : 'bg-white text-[#4b5320]   hover:border hover:border-white hover:bg-[#4b5320] hover:text-white'}  rounded-md py-1 px-4  mt-6 cursor-pointer`}>Stop</div>
    </div>
  )
}

export default Pomodoro