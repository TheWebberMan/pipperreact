import Addpip from '../components/Addpip';


function Pip () {
return (

    <div class="container">
        <div class="message-box">
            <h2>Create a Pip</h2>
            <input type="text" id="username" placeholder="Username" class="rounded-input" />
            <textarea id="content" placeholder="What's on your mind?" class="rounded-textarea"></textarea>
            <button class="rounded-button">Pip</button>
        </div>
        <div class="feed-section">
            <h2>Pip Feed</h2>
            <div id="feed" class="feed"></div>
        </div>
    </div>
)
}

export default Pip;