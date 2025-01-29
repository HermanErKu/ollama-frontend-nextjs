"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"

const Chat = () => {
    const [message, setMessage] = useState<string>("");  
    const [displayedMessage, setDisplayedMessage] = useState<string>("");

    const [selectedModel, setSelectedModel] = useState<string>("");
    const [models, setModels] = useState<any[]>([]);
    const [currentTimeStamp, setCurrentTimeStamp] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [abortController, setAbortController] = useState<AbortController | null>(null);
    const [loadingAnimation, setLoadingAnimation] = useState<boolean>(false);

    const fetchModels = async () => {
        const response = await fetch("http://localhost:11434/api/tags");
        // const response = await fetch("http://172.16.100.151:11434/api/tags");
        const data = await response.json();

        setModels(data.models);
    }

    useEffect(() => {
        fetchModels();
    }, []);

    const [data, setData] = useState<string>("");
    const askModel = async () => {
        const controller = new AbortController();
        setAbortController(controller);
        setIsLoading(true);
        setLoadingAnimation(true);
        setCurrentTimeStamp(new Date().toISOString().slice(11, 16));
        
        try {
            const response = await fetch("http://localhost:11434/api/generate", {
            //const response = await fetch("http://172.16.100.151:11434/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: message,
                    model: selectedModel
                }),
                signal: controller.signal
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
                };
            };

        } catch (error: any) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                console.error('Fetch error: ', error);
            }
        } finally {
            setIsLoading(false);
            setLoadingAnimation(false);
        }
    };

    const copyText = () => {
        navigator.clipboard.writeText(data).then(() => {
            console.log('Text copied to clipboard sucesffuly.');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    const stopGenerating = () => {
        if (abortController) {
            abortController.abort();
        }
        setIsLoading(false);
    };

    const restartChat = () => {
        setMessage("");
        setData("");
        setIsLoading(false);
        setLoadingAnimation(false);
    };

    return (
        <div className="w-full h-full p-24 flex flex-col justify-between items-center">
            <div className="flex flex-row gap-4 pt-2 justify-center self-center">
                <Select onValueChange={(value) => setSelectedModel(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Velg en modell" />
                    </SelectTrigger>
                    <SelectContent>
                        {!!models.length ? models.map(model => <SelectItem key={model.name} value={model.name}>{model.name}</SelectItem>) : <p>Fant ingen modeller</p>}
                    </SelectContent>
                </Select>
            </div>

            <div className="w-full h-full sm:max-w-[50vw] p-5 chat flex flex-col justify-start overflow-y-scroll">
                {loadingAnimation && (
                    <div className="loader">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                    </div>
                )}

                <div className={`w-full flex justify-end ${displayedMessage ? "block" : "hidden"}`}>
                    <div className="mb-20 bg-gray-800 p-2 px-4 rounded-md text-lg text-gray-200 flex flex-col items-end">
                        {displayedMessage}
                        <p className="text-gray-600 text-sm">Klokka: {currentTimeStamp}</p>
                    </div>
                </div>

                <div className={`w-full relative inset-0 overflow-y-scroll ${data ? "block" : "hidden"}`}>
                    <div className="mb-4 text-gray-800 font-bold"><p>{selectedModel}</p></div>

                    <p className="mb-20 text-gray-800 text-lg">{data}</p>

                    <Button onClick={copyText} className="text-gray-800 absolute bg-gray-50 bottom-0 left-0 border border-gray-800 hover:bg-gray-800 hover:text-gray-200">Kopier</Button>

                    <p className="text-gray-600 absolute bottom-0 right-0 text-sm">Klokka: {currentTimeStamp}</p>
                </div>
            </div>

            <div className="fixed bottom-40 flex flex-row gap-4">
                {isLoading && <Button onClick={stopGenerating} className="">Stop Generating</Button>}
                <Button onClick={restartChat} className="">Restart</Button>
            </div>

            <div className="flex fixed bottom-24 left-0 right-0 justify-center gap-4">
                <div className="relative">
                    <Input 
                        placeholder="Spør meg om hva som helst..." 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                setDisplayedMessage(message);
                                askModel();
                                setMessage("");
                            }
                        }} 
                        className="w-[30vw] focus:w-[50vw] transition-width duration-500 bg-gray-50 border border-gray-800 rounded-md focus:outline-none focus:border-none"
                    />
                    <span className="bg-gray-50 pl-1 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 text-xs">{message.length} / 1000</span>
                </div>
                <Button onClick={askModel}>Send</Button>
            </div>
        </div>
    )
}

export default Chat;