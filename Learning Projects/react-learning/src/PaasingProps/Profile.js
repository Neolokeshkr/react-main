function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}

function Avatar({ person = 'Lokesh', size = 25 }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile() {
    return (
        <div>
            <Avatar
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
                size={80}

            />
            <Avatar 
                size={100}
                person={{ 
                  name: 'Katsuko Saruhashi', 
                  imageId: 'YfeOqp2'
                }}
            />
            <Avatar 
                size={50}
                person={{ 
                  name: 'Lin Lanying',
                  imageId: '1bX5QH6'
                }}
            />
            <Avatar />
        </div>
    );
}


