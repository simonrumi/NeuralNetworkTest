var Perceptron = synaptic.Architect.Perceptron;
var LSTM = synaptic.Architect.LSTM;
var Layer = synaptic.Layer;
var Network = synaptic.Network;
var Trainer = synaptic.Trainer;

var inputLayer = new Layer(2);
var hiddenLayer = new Layer(3);
var outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

var xorNetwork = new Network({
	input: inputLayer,
	hidden: [hiddenLayer],
	output: outputLayer,
});

//train the network to learn XOR
function trainNetwork() {
	var trainingRuns = $('#numOfTrainingRuns').val();
	var learningRate = $('#learningRate').val();

	for (var i=0; i< trainingRuns; i++) {
		// 0,0 => 0
		xorNetwork.activate([0,0]);
		xorNetwork.propagate(learningRate, [0]);

		// 0,1 => 1
		xorNetwork.activate([0,1]);
		xorNetwork.propagate(learningRate, [1]);

		// 1,0 => 1
		xorNetwork.activate([1,0]);
		xorNetwork.propagate(learningRate, [1]);

		// 1,1 => 0
		xorNetwork.activate([1,1]);
		xorNetwork.propagate(learningRate, [0]);
	}

	console.log('xorNetwork.activate([0,0]) -> ' + xorNetwork.activate([0,0]));
	console.log('xorNetwork.activate([0,1]) -> ' + xorNetwork.activate([0,1]));
	console.log('xorNetwork.activate([1,0]) -> ' + xorNetwork.activate([1,0]));
	console.log('xorNetwork.activate([1,1]) -> ' + xorNetwork.activate([1,1]));

	$('#0-0').text(xorNetwork.activate([0,0]));
	$('#0-1').text(xorNetwork.activate([0,1]));
	$('#1-0').text(xorNetwork.activate([1,0]));
	$('#1-1').text(xorNetwork.activate([1,1]));
}
