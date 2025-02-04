import { NextResponse } from 'next/server'

export const success = ({message= 'success', status = 200, data = {}, headers = {}}) => {
    return NextResponse.json({status, data, message}, { status, headers })
}

export const error = ({status = 500, message = 'error', data = {}, headers = {}}) => {
    return NextResponse.json({status, message, data}, { status, headers })
}