import {Page} from 'ionic-angular';
import {TextImage} from '../../widgets/text-img/text-img';


@Page({
	templateUrl: 'build/pages/page1/page1.html',
	directives: [TextImage]
})
export class Page1 {
	names = ["Harish", "Vinoth", "Suresh", "Arun Kumar"]
	constructor() {

	}
}
