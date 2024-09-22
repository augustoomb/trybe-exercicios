require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('descrição geral', () => {
  it('verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  })

  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });

  //testando direto na promise. Inventei esse exemplo. Esse obj ficou muito grande, mas é só pra testar. Situação pouco real.
  it('verifica se o nome da personagem é Wonder Woman', async () => {
    await expect(fetchCharacter('720'))
      .resolves
      .toEqual(
        {
          "response": "success",
          "id": "720",
          "name": "Wonder Woman",
          "powerstats": {
              "intelligence": "88",
              "strength": "100",
              "speed": "79",
              "durability": "100",
              "power": "100",
              "combat": "100"
          },
          "biography": {
              "full-name": "Diana Prince",
              "alter-egos": "No alter egos found.",
              "aliases": [
                  "Princess Diana",
                  "Princess of the Amazons",
                  "Goddess of Truth",
                  " Wondy",
                  "Wonder Girl",
                  "The Amazon Princess"
              ],
              "place-of-birth": "Themyscira",
              "first-appearance": "All-Star Comics #8 (December, 1941)",
              "publisher": "DC Comics",
              "alignment": "good"
          },
          "appearance": {
              "gender": "Female",
              "race": "Amazon",
              "height": [
                  "6'0",
                  "183 cm"
              ],
              "weight": [
                  "165 lb",
                  "74 kg"
              ],
              "eye-color": "Blue",
              "hair-color": "Black"
          },
          "work": {
              "occupation": "Adventurer, Emissary to the world of Man, Protector of Paradise Island; former Goddess of Truth",
              "base": "-"
          },
          "connections": {
              "group-affiliation": "Justice League of America, Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
              "relatives": "Queen Hippolyta (mother, deceased), Donna Troy (Troia) (magically-created duplicate)"
          },
          "image": {
              "url": "https://www.superherodb.com/pictures2/portraits/10/100/807.jpg"
          }
        }
      )
  }); // fim it

  //testando valores estranhos passados como parâmetro

  //linha apenas para aprendizado. Não usar  
  it('Verifica se trona \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('qualquer coisa');
    console.log(response); // descobri que a API retorna 'invalid id'. Por isso posso montar o teste
  })


  it('Verifica se trona \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('qualquer coisa');
    expect(response).toBe('Invalid id')
    
  })

  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);  // verifica se fetch, que está dentro de fetchCharacter( lá no meu js) foi chamada 4 vezes dentro desse describe
    expect(fetch).toHaveBeenCalledWith(url); // verifica se a url chamada pelo fetch do fetchCharacter() é a correta
  })
  



});