if(!process.env.NODE_ENV){
    console.error(`[Error ] NODE_ENV is required as part of CLI input`)
    process.exit(1)
}

process.exit(0)