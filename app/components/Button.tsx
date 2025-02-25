'use client'
export const Button = () => {
    
return (
    <button 
        onClick={()=> alert('Clicked')}
        className="bg-blue-600 text-gray-100 rounded px-2 py-1 hover:bg-blue-700"
    >Click Me</button>
)
}

