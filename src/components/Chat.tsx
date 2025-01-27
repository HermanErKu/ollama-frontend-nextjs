import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"


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



    const [data, setData] = useState<string>("");
    const askModel = async () => {
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: message,
                model: selectedModel
            })
        });
    
        const reader = response.body?.getReader();
        const decoder = new TextDecoder("utf-8");
        let data = '';
    
        if (reader) {
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                data += decoder.decode(value, { stream: true });
                const dataResponses = data.split('"response":"');
                let string = "";
                for (let i = 1; i < dataResponses.length; i++) {
                    string += dataResponses[i].split('","')[0];
                }
                setData(string);
            }
        }
    };

    return (
        <div className="">
            <div className="flext flex-row gap-4 pt-2 justify-center self-center">
                <Select onValueChange={(value) => setSelectedModel(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Velg modell" />
                    </SelectTrigger>
                    <SelectContent>
                        {!!models.length ? models.map(model => <SelectItem key={model.name} value={model.name}>{model.name}</SelectItem>) : <p>Fant ingen modeller</p>}
                        </SelectContent>
                </Select>
            </div>


            <div className="w-full m-10 overflow-y-auto">
                <p className="">{data}</p>
            </div>


            <div className="flex fixed bottom-[100px] left-0 right-0 justify-center gap-4">
                <Input placeholder="Spør meg om hva som helst..." value={message} onChange={(e) => setMessage(e.target.value)} className="w-[70vw]"/>
                <Button onClick={askModel}>Send</Button>
            </div>
        </div>
    )
}

export default Chat;