type GetObjectResult = {
    v1: string
}

export function getObject(): GetObjectResult {
    return {
        v1: 'version 1'
    }
}