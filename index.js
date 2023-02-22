function calculate() {
	const loanAmount = document.getElementById('loan-amount').value;
	const interestRate = document.getElementById('interest-rate').value / 100 / 12;
	const loanTerm = document.getElementById('loan-term').value * 12;

	const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);

	document.getElementById('output').innerHTML = `Your monthly payment is ${monthlyPayment.toFixed(2)}.`;
}
