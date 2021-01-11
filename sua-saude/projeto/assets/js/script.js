const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const gender = getSelectedValue('sexo');
  const age = getInputNumberValue('idade');
  const weight = getInputNumberValue('peso');
  const height = getInputNumberValue('altura');
  const activityLevel = getSelectedValue('atividade');

  const tbasal = Math.round(
    gender === 'female'
      ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
      : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
  );
  const manutencao = Math.round(tbasal * Number(activityLevel));
  const perderpeso = manutencao - 450;
  const ganharpeso = manutencao + 450;

  const layout = `
    <h2>Resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${tbasal} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${manutencao} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${perderpeso} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${ganharpeso} calorias</strong>.
        </li>
      </ul>
    </div>
  `;

  const result = document.getElementById('result');

  result.innerHTML = layout;
}

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}