<template>
    <quill-editor v-model="content"
        :options="editorRules"
        @blur="onBlur($event)"
        @focus="onFocus($event)"
        @ready="onReady($event)"
        @change="onChange($event)">
    </quill-editor>
</template>

<script>
    export default {
        name: 'editor',
        data() {
            return {
                content: '',
                editorRules: {
                        modules: {
                            toolbar: [
                                [{ 'size': ['small', false, 'large'] }],
                                ['bold', 'italic'],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }]
                            ],
                            history: {
                                delay: 1000,
                                maxStack: 50,
                                userOnly: false
                        }
                    }
                }
            }
        },
        methods: {
            onBlur({ editor, html, text}) {
            },
            onFocus({ editor, html, text}) {
            },
            onReady({ editor, html, text}) {
            },
            onChange({ editor, html, text}) {
                this.content = html
            }
        }
    }
</script>