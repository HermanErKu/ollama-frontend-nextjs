import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


const Chat = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <div className="flex">

            <div className="flex fixed bottom-[100px] left-0 right-0 justify-center gap-4">
                <Input placeholder="Spør meg om hva som helst..." value={message} onChange={(e) => setMessage(e.target.value)} className="w-[70vw]"/>
                <Button>Send</Button>
            </div>
        </div>
    )
}

export default Chat;