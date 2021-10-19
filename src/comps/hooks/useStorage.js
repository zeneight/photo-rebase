import { useState, useEffect } from "react";
import { projectStorage } from "../../firebase/config";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(0);
    const [url, setUrl] = useState(0);

    useEffect(() => {
        // references
        const storateRef = projectStorage.ref(file.name)
    }, [file])

    )

}