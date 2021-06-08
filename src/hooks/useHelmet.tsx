
import {useEffect} from 'react';

/**
 * 
 * @param title 
 *  requires title props to set document title
 */
export const useHelmet = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title])
}
