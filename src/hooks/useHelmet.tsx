
import {useEffect} from 'react';


export const useHelmet = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title])
}
