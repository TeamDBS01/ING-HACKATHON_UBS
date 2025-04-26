'use client'

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertTriangle, User, Calendar, File, Camera, UploadCloud, Check } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Calendar as CalendarPrimitive } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";



const step1Schema = z.object({
    firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
    lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
});

const step2Schema = z.object({
    dob: z.date({ required_error: "A date of birth is required." }),
    address: z.string().min(5, { message: 'Address must be at least 5 characters.' }),
});

const step3Schema = z.object({
    identityProof: z.any().refine((files) => files?.length === 1, {
        message: 'You need to upload an identity proof',
    }),
    selfie: z.any().refine((files) => files?.length === 1, {
        message: 'You need to upload a selfie',
    }),
});

// Union schema for all steps
const formSchema = step1Schema.merge(step2Schema).merge(step3Schema);

// Step Components
const Step1 = ({ form }: { form: any }) => (
    <div className="space-y-4">
        <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    </div>
);

const Step2 = ({ form }: { form: any }) => {
    const [date, setDate] = useState<Date>()

    return (
        <div className="space-y-4">
            <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>Date of Birth</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full pl-3 text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <CalendarPrimitive
                                    mode="single"
                                    selected={date}
                                    onSelect={(selectedDate) => {
                                        setDate(selectedDate);
                                        field.onChange(selectedDate);
                                    }}
                                    disabled={(date) =>
                                        date > new Date() || date < new Date('1900-01-01')
                                    }
                                    initialFocus
                                    fromYear={1900}  // Allow selecting years back to 1900
                                    toYear={new Date().getFullYear()} //and up to current year
                                />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Enter your address" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    )
};

const Step3 = ({ form, setSelfieFile, setIdentityProofFile }: { form: any, setSelfieFile: (File) => void, setIdentityProofFile: (File) => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [selfieTaken, setSelfieTaken] = useState(false);
    const [identityProofName, setIdentityProofName] = useState<string>('');
    const [stream, setStream] = useState<MediaStream | null>(null); // State to hold the camera stream

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'identityProof' | 'selfie') => {
        const files = e.target.files;
        if (files && files.length > 0) {
            if (fieldName === 'identityProof') {
                setIdentityProofFile(files[0]);
                setIdentityProofName(files[0].name)
                form.setValue('identityProof', files); // Update form value
            } else {
                setSelfieFile(files[0]);
                form.setValue('selfie', files);
            }
        }
    };

    const openCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setStream(stream); // Store the stream
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setIsCameraOpen(true);
            }
        } catch (err) {
            console.error('Error accessing camera:', err);
            alert('Camera access is required to take a selfie.');
        }
    };

    const takeSelfie = () => {
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (!context) {
                alert('Could not get canvas context');
                return;
            }
            canvasRef.current.width = videoRef.current.videoWidth;
            canvasRef.current.height = videoRef.current.videoHeight;
            context.drawImage(videoRef.current, 0, 0, videoRef.current.videoWidth, videoRef.current.videoHeight);

            canvasRef.current.toBlob((blob) => {
                if (blob) {
                    const file = new File([blob], 'selfie.jpg', { type: 'image/jpeg' });
                    setSelfieFile(file);
                    form.setValue('selfie', [file]); // Update form value
                    setSelfieTaken(true);
                    setIsCameraOpen(false); // Close camera after taking selfie
                    // Stop the camera stream
                    if (stream) {
                        const tracks = stream.getTracks();
                        tracks.forEach((track) => track.stop());
                        setStream(null);
                    }
                }
            }, 'image/jpeg');
        }
    };

    const retakeSelfie = () => {
        setSelfieTaken(false);
        openCamera();
    }

    useEffect(() => {
        // Cleanup function to stop the camera stream when the component unmounts
        return () => {
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach((track) => track.stop());
                setStream(null);
            }
        };
    }, [stream]);


    return (
        <div className="space-y-6">
            <FormField
                control={form.control}
                name="identityProof"
                render={({ field }) => (
                    <FormItem>

                        <FormLabel>Identity Proof (e.g., Passport, ID Card)</FormLabel>
                        <FormControl>
                            <div className="flex items-center gap-4">
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 'identityProof')}
                                    className="hidden"
                                    id="identityProofInput"
                                />
                                <label
                                    htmlFor="identityProofInput"
                                    className={cn(
                                        'cursor-pointer px-4 py-2 rounded-md border',
                                        'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700',
                                        'transition-colors duration-200',
                                        identityProofName ? 'border-green-500' : 'border-gray-300 dark:border-gray-700',
                                        'flex items-center gap-2'
                                    )}
                                >
                                    {identityProofName ? (
                                        <>
                                            <Check className="h-4 w-4 text-green-500" />
                                            {identityProofName}
                                        </>
                                    ) : (
                                        <>
                                            <UploadCloud className="h-4 w-4" />
                                            Choose File
                                        </>
                                    )}
                                </label>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="selfie"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Selfie</FormLabel>
                        <FormControl>
                            <div className="space-y-4">
                                {isCameraOpen && !selfieTaken ? (
                                    <div className="relative">
                                        <video
                                            ref={videoRef}
                                            autoPlay
                                            muted  // Add muted attribute to prevent audio feedback
                                            className="rounded-md w-full max-w-md h-auto"
                                        />
                                        <canvas ref={canvasRef} className="hidden"></canvas>
                                        <Button
                                            onClick={takeSelfie}
                                            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg"
                                        >
                                            <Camera className="h-6 w-6" />
                                        </Button>
                                    </div>
                                ) : selfieTaken ? (
                                    <div className="flex items-center gap-4">
                                        <CheckCircle className="h-6 w-6 text-green-500" />
                                        <p>Selfie Taken Successfully!</p>
                                        <Button
                                            onClick={retakeSelfie}
                                            variant="outline"
                                            size="sm"
                                            className="ml-auto"
                                        >
                                            Retake
                                        </Button>
                                    </div>

                                ) : (
                                    <Button onClick={openCamera} variant="outline" className="w-full max-w-md">
                                        <Camera className="mr-2 h-4 w-4" />
                                        Open Camera
                                    </Button>
                                )}
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

const KycCompletionForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionResult, setSubmissionResult] = useState<{ success?: boolean; message?: string; errors?: any } | null>(null);
    const [identityProofFile, setIdentityProofFile] = useState<File | null>(null);
    const [selfieFile, setSelfieFile] = useState<File | null>(null);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            dob: undefined,
            address: '',
            identityProof: undefined,
            selfie: undefined,
        },
    });

    const handleNext = useCallback(() => {
        const currentSchema = steps[currentStep].schema;
        form.trigger(Object.keys(currentSchema.shape)).then((isValid) => {
            if (isValid) {
                setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
            }
        });
    }, [currentStep, form]);

    const handlePrevious = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        setSubmissionResult(null); // Clear previous results

        // Simulate form submission (replace with your actual submission logic)
        try {
            console.log('Form data submitted:', { ...data, identityProofFile, selfieFile });

            // Simulate server-side validation and processing (replace with your actual logic)
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

            // Simulate success
            setSubmissionResult({ success: true, message: 'KYC completed successfully!' });
        } catch (error: any) {
            setSubmissionResult({ success: false, message: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    const steps = [
        { id: 'step1', label: 'Personal Details', component: Step1, schema: step1Schema },
        { id: 'step2', label: 'Address & DOB', component: Step2, schema: step2Schema },
        { id: 'step3', label: 'Upload Documents', component: Step3, schema: step3Schema },
    ];

    const currentStepData = steps[currentStep];
    const CurrentComponent = currentStepData.component;

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">KYC Completion</h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">Step {currentStep + 1} of {steps.length}</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CurrentComponent form={form} setSelfieFile={setSelfieFile} setIdentityProofFile={setIdentityProofFile} />
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-between">
                            <Button
                                variant="outline"
                                onClick={handlePrevious}
                                disabled={currentStep === 0 || isSubmitting}
                                className="w-1/3"
                            >
                                Previous
                            </Button>
                            {currentStep < steps.length - 1 ? (
                                <Button
                                    onClick={handleNext}
                                    disabled={isSubmitting}
                                    className="w-1/3"
                                >
                                    Next
                                </Button>
                            ) : (
                                <Button type="submit" disabled={isSubmitting} className="w-1/3">
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit"
                                    )}
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
                {submissionResult && (
                    <div className={cn(
                        "mt-6 p-4 rounded-md text-center",
                        submissionResult.success
                            ? "bg-green-100 text-green-800 border border-green-300"
                            : "bg-red-100 text-red-800 border border-red-300"
                    )}>
                        {submissionResult.success ? (
                            <div className="flex items-center justify-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                <p>{submissionResult.message}</p>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                {submissionResult.errors ? (
                                    <div>
                                        <p>Please correct the following errors:</p>
                                        <ul>
                                            {Object.entries(submissionResult.errors).map(([key, value]) => (
                                                <li key={key}>{key}: {value}</li>
                                            ))}
                                        </ul>
                                    </div>

                                ) : (
                                    <p>{submissionResult.message}</p>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default KycCompletionForm;

