import React, { Component } from 'react'
import styles from './EmotionsItem.module.css'

class EmotionItem extends Component {
  render() {
    const { name, image, onEmoClick } = this.props
    return (
      <div className={styles.emotionItem} onClick={onEmoClick}>
        <img src={image} alt={image} className={styles.img} />
        <h4 className="emotion-item__name">{name}</h4>
      </div>
    )
  }
}

export default EmotionItem
