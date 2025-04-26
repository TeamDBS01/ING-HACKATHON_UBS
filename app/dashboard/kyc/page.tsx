import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, XCircle, Clock, UserPlus, ShieldQuestionIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import KycForm from '@/components/customers/accounts/KycForm';

interface KycStatusProps {
  status: 'pending' | 'approved' | 'rejected' | 'unknown' | 'not_started';
  message?: string; // Optional message for additional information
  onTryAgain?: () => void; // Callback for "Try Again" action
  onCreateKyc?: () => void; // Callback for "Create KYC" action
}

const KycStatusCard: React.FC<KycStatusProps> = ({ status, message, onTryAgain, onCreateKyc }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'approved':
        return {
          label: 'Approved',
          Icon: CheckCircle,
          variant: 'success',
          className: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
        };
      case 'pending':
        return {
          label: 'Pending',
          Icon: Clock,
          variant: 'secondary',
          className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 animate-pulse',
        };
      case 'rejected':
        return {
          label: 'Rejected',
          Icon: XCircle,
          variant: 'destructive',
          className: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
          action: onTryAgain ? (
            <Button variant="outline" size="sm" onClick={onTryAgain} className="mt-4">
              Try Again
            </Button>
          ) : null,
        };
      case 'unknown':
        return {
          label: 'Unknown',
          Icon: ShieldQuestionIcon,
          variant: 'default',
          className: 'text-gray-500 dark:text-gray-400',
          action: onCreateKyc ? (
            <Button variant="default" size="sm" onClick={onCreateKyc} className="mt-4">
              <UserPlus className="mr-2 h-4 w-4" />
              Create KYC
            </Button>
          ) : null,
        };
      case 'not_started':
          return {
            label: 'Not Started',
            Icon: AlertTriangle,
            variant: 'outline',
            className: 'text-gray-500 dark:text-gray-400',
            action: onCreateKyc ? (
              <Button variant="default" size="sm" onClick={onCreateKyc} className="mt-4">
                <UserPlus className="mr-2 h-4 w-4" />
                Start KYC
              </Button>
            ) : null,
          };
      default:
        return {
          label: 'Unknown',
          Icon: AlertTriangle,
          variant: 'default',
          className: 'text-gray-500 dark:text-gray-400',
        };
    }
  };

  const { label, Icon, className, action } = getStatusConfig();

  return (

   /*  
    <div className="flex items-center justify-center h-screen">
     <Card
        className={cn(
          'w-full md:w-1/2 h-[50vh] flex flex-col justify-center items-center p-6',
          'border shadow-lg',
          'bg-white dark:bg-gray-900',
          'rounded-xl',
        )}
      >
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">KYC Status</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Your Know Your Customer (KYC) status is:
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center w-full">
          <Badge
            variant="outline"
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 rounded-full border text-lg', // Increased si
              className,
              'transition-all duration-300', // Smooth transitions
              status === 'pending' && 'animate-pulse', 
            )}
          >
            <Icon className="h-6 w-6" /> 
            <span className="font-bold">{label}</span> 
          </Badge>
          {message && (
            <p className={cn(
              "text-center mt-4 text-sm",
              status === 'rejected' ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
            )}>
              {message}
            </p>
          )}
          {action}
        </CardContent>
        
      </Card>
    
     
      
    </div> */
    <KycForm/>
  );
};

export default KycStatusCard;

