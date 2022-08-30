import {defineStore} from "pinia";

export const useStoreNotes = defineStore("notes", {
    state: () => {
        return {
            notes: [
                {
                    id: "1",
                    content:
                        "Lorem ipsssum dolor sit amet, consectetur adipisicing elit. Architectoasperiores assumenda culpa delectus eveniet, itaque magni modi namnihil possimus quasi quis repellendus sapiente? Ad amet asperioresdebitis laboriosam quo!",
                },
                {
                    id: "2",
                    content: "shorter note",
                },
            ],
        };
    },
    actions: {
        addNote(content) {
            let id = new Date().getTime().toString();
            let note = {
                id,
                content,
            };
            this.notes.unshift(note);
        },
        deleteNote(id) {
            this.notes = this.notes.filter((n) => n.id !== id);
        },
        updateNote(id, content) {
            this.notes.find((n) => n.id === id).content = content;
        },
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.find((n) => n.id === id).content;
            };
        },

        totalNotesCount: (state) => {
            return state.notes.length;
        },

        totalCharCount: (state) => {
            let count = 0;

            for (const i in state.notes) {
                count += state.notes[i].content.length;
            }

            return count;
        },
    },
});
