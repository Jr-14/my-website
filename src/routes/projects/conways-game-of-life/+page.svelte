<script lang="ts">
	import '../../../global.css';
	import Navigation from '../../Navigation.svelte';
	import Canvas from './Canvas.svelte';
</script>

<Navigation />

<article>
	<h1>Conway's Game of Life</h1>
	<p>
		Conway's game of life is a simulation played on a grid of cells. Each cell can either be dead or
		alive. Every turn the status of each cell is determined by the neighbouring cells. Theres only 2
		rules that govern the cells state on the next turn.
	</p>
	<ol>
		<li>
			If the cell is alive, then it stays alive if it has 2 or 3 live neighbours. Else it dies.
		</li>
		<li>
			If the cell is dead, then it comes alive in case it has 3 live neighbours. Else it remains
			dead.
		</li>
	</ol>

	<a target="_blank" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
		>Wikipedia link to Conway's Game of Life</a
	>
</article>

<br />
<br />

<Canvas />
