<template>
    <div class="chat container">
        <h2 class="center">Ninja Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages">
                    <li>
                        <span class="teal-text">Name</span>
                        <span class="grey-text text-darken-3">Message</span>
                        <span class="grey-text time">time</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <input type="text" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    props: ['name'],
    data() {
        return {}
    },
}
</script>

<style>
.chat {
    max-width: 400px;
}
.messages span {
    font-size: 1.4em;
}

.messages .time {
    display: block;
    font-size: 1.2em;
}
</style>
