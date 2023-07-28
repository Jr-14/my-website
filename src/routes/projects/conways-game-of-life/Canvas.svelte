<script lang="ts">
	// adapted from: https://www.npmjs.com/package/intrinsic-scale
	import { onMount } from 'svelte';

	// function render() {
	//     const dimensions = getObjectFitSize(
	//         true,
	//         myCanvas.clientWidth,
	//         myCanvas.clientHeight,
	//         myCanvas.width,
	//         myCanvas.height
	//     );

	//     myCanvas.width = dimensions.width;
	//     myCanvas.height = dimensions.height;

	//     let ctx = myCanvas.getContext("2d");
	//     ctx.scale(1, 1);
	//     ctx.beginPath();
	//     ctx.arc(50, 50, 50, 0, 2 * Math.PI);
	//     ctx.stroke();
	// }

	const getObjectFitSize = (
		contains: boolean /* true = contain, false = cover */,
		containerWidth: number,
		containerHeight: number,
		width: number,
		height: number
	) => {
		var doRatio = width / height;
		var cRatio = containerWidth / containerHeight;
		var targetWidth = 0;
		var targetHeight = 0;
		var test = contains ? doRatio > cRatio : doRatio < cRatio;

		if (test) {
			targetWidth = containerWidth;
			targetHeight = targetWidth / doRatio;
		} else {
			targetHeight = containerHeight;
			targetWidth = targetHeight * doRatio;
		}

		return {
			width: targetWidth,
			height: targetHeight,
			x: (containerWidth - targetWidth) / 2,
			y: (containerHeight - targetHeight) / 2
		};
	};

	let canvasElement: HTMLCanvasElement;

	onMount(() => {
		const dimensions = getObjectFitSize(
			true,
			canvasElement.clientWidth,
			canvasElement.clientHeight,
			canvasElement.width,
			canvasElement.height
		);

		canvasElement.width = dimensions.width;
		canvasElement.height = dimensions.height;
		// Get canvas context
		const ctx = canvasElement.getContext('2d');

		// draw line
		ctx?.beginPath();
		ctx?.moveTo(0, 0);
		ctx?.lineTo(150, 100);
		ctx?.stroke();

		ctx?.beginPath();
		ctx?.moveTo(10, 40);
		ctx?.lineTo(150, 120);
		ctx?.stroke();
	});
</script>

<canvas id="game-of-life" bind:this={canvasElement} />

<style>
	#game-of-life {
		width: 100%;
		height: 500px;
		border: 1px solid;
		object-fit: contain;
	}
</style>
