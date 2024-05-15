import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import styles from './ContactForm.module.scss';
import Image from 'next/image';

const ContactFormTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        color: '#FFF',
    },
    'label': {
        color: '#FFF',
      },
    '& label.Mui-focused': {
      color: '#FFF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#5A5A5A',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#5A5A5A',
      },
      '&:hover fieldset': {
        borderColor: '#5A5A5A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5A5A5A',
      },
    },
  });

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newErrors = {} as { name?: string; email?: string };
        
        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        // Submit form logic
        console.log({ name, email, message });
        
        // Clear form
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
    };

    return (
            <form onSubmit={handleSubmit}>
                        <Typography variant="h6" gutterBottom>Contact Us</Typography>
                        <ContactFormTextField
                            label="Your Name"
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            InputProps={{
                                endAdornment: errors.name && <InputAdornment position="end">
                                    <Image
                                    priority
                                    src="/error.svg"
                                    height={22}
                                    width={22}
                                    alt="error"
                                    />
                                </InputAdornment>,
                              }}
                        />
                        <ContactFormTextField
                            label="Your Email"
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                endAdornment: errors.email && <InputAdornment position="end">
                                    <Image
                                    priority
                                    src="/error.svg"
                                    height={22}
                                    width={22}
                                    alt="error"
                                    />
                                </InputAdornment>,
                              }}
                        />
                        <ContactFormTextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            margin="dense"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button className={styles.submitButton} variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
            </form>
    );
};

export default ContactForm;
