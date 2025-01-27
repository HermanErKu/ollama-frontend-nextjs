import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


const Chat = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <div className="flex">

            <Input value={message} onChange={(e) => setMessage(e.target.value)} className="w-[70vw]"/>
            <Button>Send</Button>
        </div>
    )
}

export default Chat;