import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core';

declare var data: any;
declare var VanillaTilt: any;

@Component({
	selector: 'app-recommendation',
	templateUrl: './recommendation.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./recommendation.component.css'],
})
export class RecommendationComponent implements OnInit, AfterViewInit {
	public recommendData = data['Recommendation'];
	public checkScreenSize: boolean = screen.width >= 768;

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

	ngAfterViewInit(): void {
		if (this.checkScreenSize) {
			let box: any = document.querySelectorAll('.box');
			VanillaTilt.init(box, {
				max: 25,
				speed: 400,
				startX: 0,
				startY: 0,
				scale: 1.03,
			});
		}
	}

	onGoToLinkedin() {
		window.open('https://www.linkedin.com/in/pablo-augusto/', '_blank');
	}
}
