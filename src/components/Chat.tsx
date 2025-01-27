import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"


//models response
// make this a type



const Chat = () => {
    const [message, setMessage] = useState<string>("");  

    const [selectedModel, setSelectedModel] = useState<string>("");
    const [models, setModels] = useState<any[]>([]);

    const fetchModels = async () => {
        const response = await fetch("http://localhost:11434/api/tags");
        const data = await response.json();

        setModels(data.models);
    }

    useEffect(() => {
        fetchModels();
    }, [])

    console.log(models.map(model => model.name));

    return (
        <div className="flex">
            <Select onValueChange={(value) => setSelectedModel(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Velg modell" />
                </SelectTrigger>
                <SelectContent>
                    {!!models.length ? models.map(model => <SelectItem key={model.name} value={model.name}>{model.name}</SelectItem>) : <p>Fant ingen modeller</p>}
                    </SelectContent>
            </Select>

            

            <div className="flex fixed bottom-[100px] left-0 right-0 justify-center gap-4">
                <Input placeholder="Spør meg om hva som helst..." value={message} onChange={(e) => setMessage(e.target.value)} className="w-[70vw]"/>
                <Button>Send</Button>
            </div>
        </div>
    )
}

export default Chat;