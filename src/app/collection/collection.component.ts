import { Component, OnInit } from '@angular/core';
import { Collectable } from '../shared/collectables.model';
import { CollectableService } from '../shared/collectable.service';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
	collectedItems: Collectable[] = [];

	constructor(private collectableService: CollectableService) { }

	private onRemoveFromCollection(item: Collectable) {
		this.collectableService.removeFromCollection(item)
	}

	ngOnInit() {
		this.collectedItems = this.collectableService.getCollection()
	}

}
