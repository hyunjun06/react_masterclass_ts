import { useState } from "react";

function App() {
    const [username, setUsername] = useState("");
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;

        setUsername(value);
    };
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(username);
        setUsername("");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="username" value={username} onChange={onChange} />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default App;