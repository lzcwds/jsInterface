/**
 * Created by dy on 2018/12/5.
 *
 */
// import {layerInterface} from './interface'
class Layer {
	initializer(option) {
		console.log('initializer Layer')
		this.name = option.name+' layer';
	}

	getLayers(id) {
		let data = {
			id:12
		}
		console.log(this.name)
	}

	addLayer() {

	}
}
