// https://react.dev/learn/reacting-to-input-with-state

    // Add and remove a CSS class
        import {useState} from 'react'
        export default function Picture() {
          const [divClass, setDivClass]  = useState('background--active')
          const [imageClass, setImageClass]  = useState('')
          function handleClick(e){
            e.stopPropagation();
            setDivClass('');
            setImageClass('picture--active')
          }
          function handleDivClick(){
            setDivClass('background--active');
            setImageClass('')
          }
          return (
            <div className={`background ${divClass}`} onClick={handleDivClick}>
              <img
                className={`picture ${imageClass}`}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
                onClick={handleClick}
              />
            </div>
          );
        }

    // Profile Editor
        import {useState} from 'react'
        export default function EditProfile() {
          const [firstName,setFirstName] = useState('Jane');
          const [lastName,setLastName] = useState('Jacobs');
          const [editProfile,setEditProfile] = useState(false);
          function handleSubmit(e){
            e.preventDefault();
            setEditProfile(false);
          }
          return (
            <form onSubmit={handleSubmit}>
              <label>
                First name:{' '}
                { !editProfile && <b>{firstName}</b>}
                { editProfile && 
                <input 
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  />}
              </label>
              <label>
                Last name:{' '}
                { !editProfile && <b>{lastName}</b>}
                { editProfile && 
                <input 
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  />
                }
              </label>
              { editProfile && <button type="submit">
                Save Profile
              </button> }
              { !editProfile &&
              <button type="button" onClick={
                e => {
                  e.stopPropagation();
                  setEditProfile(true);
                }
              } >
              Edit Profile
              </button> }
               <p><i>Hello, {firstName} {lastName}</i></p>
            </form>
          );
        }
        