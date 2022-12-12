import json
import sys

def consoles_report(video_games):
    all_consoles = set()
    for game in video_games:
        all_consoles.add(game["Release"]["Console"])
    print(f"Consoles: {all_consoles}")

def genres_report(video_games):
    all_genres = set()
    for game in video_games:
        genres = game["Metadata"]["Genres"]
        for genre in genres.split(','):
            all_genres.add(genre)
    
    print(f"Categorias: {all_genres}")

    scores_by_genre = {genre: [] for genre in all_genres}
    print('augusto')
    print(scores_by_genre)
    for game in video_games:
        genres = game["Metadata"]["Genres"]
        score = game["Metrics"]["Review Score"]
        for genre in genres.split(','):
            scores_by_genre[genre].append(score)

    avg_score_by_genre = {}
    for genre, scores in scores_by_genre.items():
        avg_score_by_genre[genre] = sum(scores) / len(scores)

    print(f"Médias: {avg_score_by_genre}")

    with open('avg_score_by_genre.json', 'w') as file:
        json.dump(avg_score_by_genre, file, indent=4)

def main():
    if len(sys.argv) != 3:
        print("Parâmetros inválidos!")
        sys.exit(1)

    filename = sys.argv[1]
    command = sys.argv[2]

    try:
        with open(filename, 'r') as file:
            video_games = json.load(file)
    except FileNotFoundError as exc:
        print("Arquivo inexistente!")
        sys.exit(1)
    except json.decoder.JSONDecodeError as exc:
        print("Arquivo com problema")
        sys.exit(1)

    if command == 'consoles':
        consoles_report(video_games)
    elif command == 'genres':
        genres_report(video_games)
    else:
        print("Comando inválido")
        exit(1)


    

if __name__ == '__main__':
    main()