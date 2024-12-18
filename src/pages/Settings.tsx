import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import NotificationForm from '@/components/settings/NotificationForm';
import CommunitySetting from '@/components/settings/CommunitySetting';
import { ThemeSetting } from '@/components/settings/ThemeSetting';

const tabTriggerStyles = 'data-[state=active]:font-bold';

const settings = () => {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">설정</h2>
      </div>

      <Tabs defaultValue="notifications">
        <TabsList className="flex gap-8 py-2 mb-6 border-b">
          <TabsTrigger value="notifications" className={tabTriggerStyles}>
            알림 설정
          </TabsTrigger>
          <TabsTrigger value="message" className={tabTriggerStyles}>
            메시지 설정
          </TabsTrigger>
          <TabsTrigger value="community" className={tabTriggerStyles}>
            커뮤니티 설정
          </TabsTrigger>
          <TabsTrigger value="theme" className={tabTriggerStyles}>
            테마 설정
          </TabsTrigger>
          <TabsTrigger value="cookie" className={tabTriggerStyles}>
            쿠키 설정
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notifications">
          <NotificationForm />
        </TabsContent>
        <TabsContent value="message">
          <p>메시지 설정</p>
        </TabsContent>
        <TabsContent value="community">
          <CommunitySetting />
        </TabsContent>
        <TabsContent value="theme">
          <ThemeSetting />
        </TabsContent>
        <TabsContent value="cookie">
          <p>쿠키 설정</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default settings;
