export const computeh = {
	data() {
		return {
			w_height: 0,w_width: 0
		}
	},
	mounted() {
		this.w_height = window.innerHeight + "px";
		this.w_width = window.innerWidth + "px";
		window.onresize = () => {
			this.w_height = window.innerHeight + "px";
			this.w_width = window.innerWidth + "px";
		}
	},
	computed: {
		w_defaultHeight: function() {
			return this.w_height - 180;
		},
		w_: function() {
			return this.w_defaultHeight - 63;
		},
		// w_splitHeight: function () {
		//     return (this.w_height - 130) + "px";
		// },
		// w_splitTableHeight: function () {
		//     return this.w_height - 190;
		// }
	}
}
