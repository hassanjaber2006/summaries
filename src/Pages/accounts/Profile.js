import React from 'react'
import pdf from './../../assets/test.pdf'
import image from './../../assets/default.png'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <main className='profile-page-main'>
        <div className='profile-page'>
            <div className='profile-page-header'>
                <div className='profile-page-header-left'>
                    <img src={image} alt="" />
                    <h3>Hassanjaber</h3>
                </div>
                <div className='profile-page-header-middle'>
                    <span>
                        <b>7 </b>
                        posts
                    </span>
                    <span>
                        <b>40 </b>  
                        followers
                    </span>
                    <span>
                        <b>70 </b>
                        followings
                    </span>
                </div>
                <div className="profile-page-header-right">
                    <Link to="/accounts/profile/edit" id='edit-btn'>Edit Profile</Link>
                    <Link to="/accounts/profile/edit" id='edit-icon'>
                        <i class="fa-solid fa-user-pen"></i>
                    </Link>
                </div>
            </div>  
            <div className="posts">
            <h2>Posts:</h2>
            <div className="posts-box">
                <div className="post">
                        <div className="post-header">
                            <div className='post-header-left'>
                                <img src={image} alt="" />
                            </div>   
                            <a href={pdf} download={'test'} target='blanck'>
                                <i className="fa-solid fa-file-arrow-down"></i>
                            </a>
                        </div>
                        <div className="post-body">
                            <h2>Math Summary</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe fugiat optio obcaecati aspernatur omnis eligendi aut magni laudantium ea, quod minus pariatur porro? Facilis, libero autem. Consequuntur, odit iste!
                            </p>
                        </div>
                        <div className="post-footer">
                            <span>1</span>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post-header">
                            <div className='post-header-left'>
                                <img src={image} alt="" />
                            </div>   
                            <a href={pdf} download={'test'} target='blanck'>
                                <i className="fa-solid fa-file-arrow-down"></i>
                            </a>
                        </div>
                        <div className="post-body">
                            <h2>Math Summary</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe fugiat optio obcaecati aspernatur omnis eligendi aut magni laudantium ea, quod minus pariatur porro? Facilis, libero autem. Consequuntur, odit iste!
                            </p>
                        </div>
                        <div className="post-footer">
                            <span>2</span>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post-header">
                            <div className='post-header-left'>
                                <img src={image} alt="" />
                            </div>   
                            <a href={pdf} download={'test'} target='blanck'>
                                <i className="fa-solid fa-file-arrow-down"></i>
                            </a>
                        </div>
                        <div className="post-body">
                            <h2>Math Summary</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe fugiat optio obcaecati aspernatur omnis eligendi aut magni laudantium ea, quod minus pariatur porro? Facilis, libero autem. Consequuntur, odit iste!
                            </p>
                        </div>
                        <div className="post-footer">
                            <span>3</span>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post-header">
                            <div className='post-header-left'>
                                <img src={image} alt="" />
                            </div>   
                            <a href={pdf} download={'test'} target='blanck'>
                                <i className="fa-solid fa-file-arrow-down"></i>
                            </a>
                        </div>
                        <div className="post-body">
                            <h2>Math Summary</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe fugiat optio obcaecati aspernatur omnis eligendi aut magni laudantium ea, quod minus pariatur porro? Facilis, libero autem. Consequuntur, odit iste!
                            </p>
                        </div>
                        <div className="post-footer">
                            <span>4</span>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post-header">
                            <div className='post-header-left'>
                                <img src={image} alt="" />
                            </div>   
                            <a href={pdf} download={'test'} target='blanck'>
                                <i className="fa-solid fa-file-arrow-down"></i>
                            </a>
                        </div>
                        <div className="post-body">
                            <h2>Math Summary</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe fugiat optio obcaecati aspernatur omnis eligendi aut magni laudantium ea, quod minus pariatur porro? Facilis, libero autem. Consequuntur, odit iste!
                            </p>
                        </div>
                        <div className="post-footer">
                            <span>5</span>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post-header">
                            <div className='post-header-left'>
                                <img src={image} alt="" />
                            </div>   
                            <a href={pdf} download={'test'} target='blanck'>
                                <i className="fa-solid fa-file-arrow-down"></i>
                            </a>
                        </div>
                        <div className="post-body">
                            <h2>Math Summary</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe fugiat optio obcaecati aspernatur omnis eligendi aut magni laudantium ea, quod minus pariatur porro? Facilis, libero autem. Consequuntur, odit iste!
                            </p>
                        </div>
                        <div className="post-footer">
                            <span>6</span>
                        </div>
                    </div>
                    <div className="post">
                        <div className="post-header">
                            <div className='post-header-left'>
                                <img src={image} alt="" />
                            </div>   
                            <a href={pdf} download={'test'} target='blanck'>
                                <i className="fa-solid fa-file-arrow-down"></i>
                            </a>
                        </div>
                        <div className="post-body">
                            <h2>Math Summary</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe fugiat optio obcaecati aspernatur omnis eligendi aut magni laudantium ea, quod minus pariatur porro? Facilis, libero autem. Consequuntur, odit iste!
                            </p>
                        </div>
                        <div className="post-footer">
                            <span>7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Profile