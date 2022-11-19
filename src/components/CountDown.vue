<template>
    <div v-if="seconds">        
        {{ countdown }}
    </div>
</template>

<script>
    import * as moment from 'moment';
    export default {
        name: 'CountDown',
        props: {
            seconds: {
                type: Number,
                required: true,
            }
        },
        data () {
            return {
                countdown: null,
                expires_in: null,
                interval: null,
            }
        },
        mounted () {
            this.countdown = moment.utc(this.seconds).format('mm:ss');
            this.expires_in = this.seconds;
            this._setInterval();
        },
        destroyed () {
            clearInterval(this.interval);
        },
        methods: {
            _setInterval: function() {
                this.interval = setInterval(() => {
                    if (this.expires_in === 0) {
                        clearInterval(this.interval);
                    //    location.reload(); // yo
                    } else {
                        this.expires_in -= 1;
                        this.countdown = moment.utc(this.expires_in * 1000).subtract(0, 'seconds').format('mm:ss');
                    }
                }, 1000);
            },
        }
    }
</script>