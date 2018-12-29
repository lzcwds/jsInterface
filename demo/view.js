/**
 * Created by dy on 2018/12/5.
 *
 */
// import {layerInterface} from './interface'
class View {
	initializer(option) {

		console.log('initializer view');
		this.name = 'hello'
	}

	getView(id,city) {
		console.log(id+':'+this.name+':'+city)
	}

	addView() {

	}
}