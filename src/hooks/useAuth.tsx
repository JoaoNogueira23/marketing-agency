'use client'
import { useState } from 'react';

const [isAuthenticated, setIsAtheticated] = useState<boolean>(false)

const handlerAuthenticated = () => {
    setIsAtheticated((prev) => !prev)
}

export {
    isAuthenticated,
    handlerAuthenticated
}