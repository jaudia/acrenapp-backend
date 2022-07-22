
export const reply = async (res, messages, ok=true, code=200) => {
    return res.status(code).json({
        ok,        
        messages
    });
}